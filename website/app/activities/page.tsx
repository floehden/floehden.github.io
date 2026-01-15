import { getStravaStats } from "../lib/strava";
import { Activity, Bike, Footprints, MapPin, Trophy, ExternalLink,  Timer, Zap } from "lucide-react";

export default async function Activities() {
  // Fetch data in parallel
  const [stats] = await Promise.all([
    getStravaStats(),
  ]);

  // Helper to format distance (meters to km)
  const toKm = (m: number) => (m / 1000).toFixed(1);

  return (
    <div className="py-10 space-y-12">
      
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white flex items-center">
          <Activity className="mr-3 text-brand-blue" /> 
          Activity Feed
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Tracking my physical metrics alongside my digital ones. Data fetched dynamically from the Strava API.
        </p>
      </section>

      {/* Summary Stats */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center">
          <Trophy className="mr-2 text-yellow-500" /> All-Time Stats
        </h2>
        
        {/* Check if stats exist before rendering */}
        {!stats ? (
          <div className="p-4 border border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg">
            Could not load Strava stats. Please check API configuration.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Cycling */}
            <div className="...">
              {/* ... Icon ... */}
              <h3 className="...">Cycling</h3>
              <div className="space-y-1">
                {/* USE OPTIONAL CHAINING HERE vvv */}
                <div className="text-3xl ...">
                  {toKm(stats?.all_ride_totals?.distance)} <span className="text-sm...">km</span>
                </div>
                <div className="text-sm ...">
                  {stats?.all_ride_totals?.count ?? 0} total rides
                </div>
              </div>
            </div>

            {/* Running */}
            <div className="...">
               {/* ... Icon ... */}
              <h3 className="...">Running</h3>
              <div className="space-y-1">
                {/* USE OPTIONAL CHAINING HERE vvv */}
                <div className="text-3xl ...">
                  {toKm(stats?.all_run_totals?.distance)} <span className="text-sm...">km</span>
                </div>
                <div className="text-sm ...">
                  {stats?.all_run_totals?.count ?? 0} total runs
                </div>
              </div>
            </div>

            {/* Recent Vibe */}
             <div className="...">
              <h3 className="...">Recent Vibe</h3>
              <div className="flex flex-col h-full justify-center pb-6">
                <div className="text-3xl font-bold text-brand-green">Active</div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Link to Strava Profile */}
      <section className="flex justify-center pt-8 border-t border-slate-200 dark:border-slate-800">
        <a 
          href="https://www.strava.com/athletes/61968225" 
          target="_blank"
          className="group flex items-center gap-3 px-8 py-4 bg-[#FC4C02] hover:bg-[#E34402] text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          <span>View Full Profile on Strava</span>
          <ExternalLink size={20} />
        </a>
      </section>
    </div>
  );
}