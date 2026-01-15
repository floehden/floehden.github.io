const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
const athleteId = process.env.STRAVA_ATHLETE_ID;

const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athletes/${athleteId}`;

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
    // CRITICAL FIX: Changed from 'no-store' to 'force-cache'
    // This tells Next.js: "It's okay to fetch this once during the build and use it."
    cache: 'force-cache', 
  });

  return response.json();
}

export async function getStravaStats() {
  try {
    const { access_token } = await getAccessToken();
    
    if (!access_token) {
      console.error("❌ No access token retrieved. Check Client ID/Secret.");
      return null;
    }

    const response = await fetch(`${ATHLETES_ENDPOINT}/stats`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`❌ Strava Stats Error: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error("Response body:", text);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("❌ Network error fetching Strava stats:", error);
    return null;
  }
}

export async function getStravaActivities() {
  try {
    const { access_token } = await getAccessToken();
    if (!access_token) return [];

    // Increased per_page to 50 to calculate CrossFit stats accurately
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=50`, 
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 3600 }, 
      }
    );

    if (!response.ok) return [];

    return response.json();
  } catch (error) {
    console.error("❌ Network error fetching activities:", error);
    return [];
  }
}