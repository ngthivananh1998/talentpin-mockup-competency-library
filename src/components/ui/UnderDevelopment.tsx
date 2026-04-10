import Link from "next/link";

interface Props {
  featureName: string;
  description?: string;
  expectedPhase?: string;
  backHref?: string;
  backLabel?: string;
}

export default function UnderDevelopment({
  featureName,
  description,
  expectedPhase = "Phase 2",
  backHref = "/",
  backLabel = "Back to Home",
}: Props) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#EDE9FE] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          Under Development — {expectedPhase}
        </div>

        <h1 className="text-2xl font-bold text-[#1E1B4B] mb-3">{featureName}</h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {description ||
            "This feature is currently being built and will be available in an upcoming release. Check back soon."}
        </p>

        {/* Progress bar decoration */}
        <div className="bg-gray-100 rounded-full h-1.5 mb-8 overflow-hidden">
          <div className="bg-[#7C3AED] h-full rounded-full w-1/3 animate-pulse" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={backHref}
            className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            {backLabel}
          </Link>
          <Link
            href="/library"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Explore the Library
          </Link>
        </div>
      </div>
    </div>
  );
}
