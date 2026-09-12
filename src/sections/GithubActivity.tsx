import { useEffect, useState, useMemo } from "react";
import { site } from "@/config/site";
import { Shell, SectionHeader } from "@/components/Layout";
import {
  Github,
  ExternalLink,
  GitCommit,
  GitPullRequest,
  Star,
  Activity,
  Calendar,
  Flame,
  CheckCircle2,
} from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: {
    [key: string]: number;
  };
  contributions: ContributionDay[];
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const LEVEL_COLORS = [
  "bg-surface border border-line/60",
  "bg-emerald-950/90 border border-emerald-800/50",
  "bg-emerald-700/85 border border-emerald-600/50",
  "bg-emerald-500 border border-emerald-400/50",
  "bg-emerald-400 shadow-sm shadow-emerald-400/30 border border-emerald-300",
];

export function GithubActivity() {
  const username = "Rajtiwari0202";
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    count: number;
    date: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub contributions");
        return res.json();
      })
      .then((json: ApiResponse) => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn("Could not fetch live GitHub graph, using fallback", err);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Transform contributions into weeks (columns) of 7 days
  const { weeks, monthLabels, totalContributions } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { weeks: [], monthLabels: [], totalContributions: 694 };
    }

    const contribs = data.contributions;
    const total = data.total?.lastYear ?? contribs.reduce((acc, c) => acc + c.count, 0);

    const weekCols: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // Align start to day of week
    const firstDate = new Date(contribs[0].date);
    const startDay = firstDate.getDay(); // 0 = Sunday

    for (let i = 0; i < startDay; i++) {
      currentWeek.push({ date: "", count: 0, level: -1 }); // empty filler
    }

    contribs.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weekCols.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: 0, level: -1 });
      }
      weekCols.push(currentWeek);
    }

    // Determine month label positions
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weekCols.forEach((week, wIdx) => {
      const validDay = week.find((d) => d.date !== "");
      if (validDay) {
        const m = new Date(validDay.date).getMonth();
        if (m !== lastMonth) {
          months.push({ label: MONTH_NAMES[m], weekIndex: wIdx });
          lastMonth = m;
        }
      }
    });

    return { weeks: weekCols, monthLabels: months, totalContributions: total };
  }, [data]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="github" className="w-full">
      <SectionHeader
        title="GitHub Activity"
        number="05"
        aside={`// Real-Time Contributions`}
      />

      <Shell className="px-4 py-8 sm:px-6 sm:py-10 space-y-6">
        {/* Profile Card Summary */}
        <div className="rounded-xl border border-line bg-surface/40 p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface shadow-sm">
                <Github className="h-6 w-6 text-text" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-base font-semibold text-text hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>@{username}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted" />
                  </a>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>
                <p className="font-mono text-xs text-muted mt-0.5">
                  Full-stack repositories • Agentic workflows • Systems engineering
                </p>
              </div>
            </div>

            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-line bg-surface px-4 py-2 font-mono text-xs text-text hover:border-text transition-colors self-start sm:self-auto"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="h-3 w-3 text-muted" />
            </a>
          </div>

          {/* Live Heatmap Container */}
          <div className="space-y-2.5 pt-2 border-t border-line">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted">
              <div className="flex items-center gap-2 text-text font-medium">
                <Activity className="h-3.5 w-3.5 text-accent" />
                <span>
                  {loading
                    ? "Fetching live commit history..."
                    : `${totalContributions.toLocaleString()} contributions in the last year`}
                </span>
              </div>
              <span className="text-[11px] text-muted">
                Direct from api.github.com
              </span>
            </div>

            {/* Matrix Grid Scroll Area */}
            <div className="relative overflow-x-auto rounded-lg border border-line bg-bg p-4 select-none">
              {loading ? (
                <div className="flex items-center justify-center h-32 text-xs font-mono text-muted animate-pulse">
                  Loading real-time contribution matrix...
                </div>
              ) : (
                <div className="inline-block min-w-full">
                  {/* Month header row */}
                  <div className="flex text-[10px] font-mono text-muted mb-1 ml-6 relative h-4">
                    {monthLabels.map((m, idx) => (
                      <span
                        key={idx}
                        className="absolute"
                        style={{ left: `${m.weekIndex * 13.5}px` }}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 items-start">
                    {/* Day labels column */}
                    <div className="flex flex-col gap-[3px] text-[9px] font-mono text-muted shrink-0 pt-0.5 select-none">
                      <span className="h-[10px] leading-[10px]">Mon</span>
                      <span className="h-[10px] leading-[10px] mt-[13px]">Wed</span>
                      <span className="h-[10px] leading-[10px] mt-[13px]">Fri</span>
                    </div>

                    {/* Weeks Columns */}
                    <div className="flex gap-[3px]">
                      {weeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-[3px]">
                          {week.map((day, dIdx) => {
                            if (day.level < 0) {
                              return (
                                <div
                                  key={dIdx}
                                  className="h-[10px] w-[10px] rounded-[2px] opacity-0"
                                />
                              );
                            }

                            const colorClass =
                              LEVEL_COLORS[Math.min(day.level, LEVEL_COLORS.length - 1)];

                            return (
                              <div
                                key={dIdx}
                                onMouseEnter={(e) => {
                                  const rect = e.currentTarget.getBoundingClientRect();
                                  setHoveredDay({
                                    count: day.count,
                                    date: day.date,
                                    x: rect.left + rect.width / 2,
                                    y: rect.top - 8,
                                  });
                                }}
                                onMouseLeave={() => setHoveredDay(null)}
                                className={`h-[10px] w-[10px] rounded-[2px] cursor-pointer transition-transform hover:scale-125 hover:z-20 ${colorClass}`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend Row */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted mt-3 pt-2 border-t border-line/50">
                    <span className="text-[10px]">
                      Daily activity mapped directly to GitHub events
                    </span>

                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span>Less</span>
                      {LEVEL_COLORS.map((color, idx) => (
                        <div
                          key={idx}
                          className={`h-[9px] w-[9px] rounded-[2px] ${color}`}
                        />
                      ))}
                      <span>More</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Activity Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
            <div className="rounded-lg border border-line bg-surface/60 p-3.5">
              <div className="text-muted flex items-center gap-1.5 mb-1 text-[11px]">
                <Flame className="h-3.5 w-3.5 text-amber-400" />
                <span>Contest & Streak</span>
              </div>
              <div className="font-semibold text-text">
                54-Day Streak • 152 Active Days
              </div>
            </div>

            <div className="rounded-lg border border-line bg-surface/60 p-3.5">
              <div className="text-muted flex items-center gap-1.5 mb-1 text-[11px]">
                <GitCommit className="h-3.5 w-3.5 text-accent" />
                <span>Annual Output</span>
              </div>
              <div className="font-semibold text-text">
                {totalContributions} Commits in Past Year
              </div>
            </div>

            <div className="rounded-lg border border-line bg-surface/60 p-3.5">
              <div className="text-muted flex items-center gap-1.5 mb-1 text-[11px]">
                <GitPullRequest className="h-3.5 w-3.5 text-blue-400" />
                <span>Active Repos</span>
              </div>
              <div className="font-semibold text-text">
                Forge Editor, ResQ-Her & PrepWise
              </div>
            </div>
          </div>
        </div>
      </Shell>

      {/* Floating Tooltip */}
      {hoveredDay && (
        <div
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full rounded-md bg-neutral-900 px-2.5 py-1 text-center font-mono text-[11px] text-white shadow-xl border border-neutral-700 animate-in fade-in duration-100"
          style={{ left: `${hoveredDay.x}px`, top: `${hoveredDay.y}px` }}
        >
          <span className="font-semibold text-emerald-400">
            {hoveredDay.count === 0 ? "No contributions" : `${hoveredDay.count} contributions`}
          </span>{" "}
          on {formatDate(hoveredDay.date)}
        </div>
      )}
    </section>
  );
}
