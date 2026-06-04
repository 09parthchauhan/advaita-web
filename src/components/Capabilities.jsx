import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Capabilities() {
  const features = [
    {
      title: "KPI Growth Tracking",
      desc: "Track activation, retention, and conversion metrics in real time.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17l6-6 4 4 8-8" />
        </svg>
      ),
    },
    {
      title: "AI Root-Cause Analysis",
      desc: "Understand exactly why metrics change without manual investigation.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Experimentation Engine",
      desc: "Run A/B tests with confidence using statistically sound insights.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3v18M18 3v18M6 8h12M6 16h12" />
        </svg>
      ),
    },
    {
      title: "Universal SDKs",
      desc: "Integrate seamlessly across web, mobile, and backend systems.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-28 px-6 md:px-16 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1440px] mx-auto"
      >
        {/* HEADER */}
        <motion.div variants={item} className="mb-20 max-w-3xl">
          <p className="text-sm text-pink-500 font-medium mb-3 tracking-wide">
            ADS PERFORMANCE
          </p>

          <h3 className="text-[54px] leading-[130%] tracking-[-4px] font-semibold text-gray-900 whitespace-nowrap">
            Supercharge Your Product With AI
          </h3>

          <p className="text-gray-600 mt-6">
            Advaita helps teams unlock the full potential of their clickstream data 
            with real-time analytics and actionable AI insights.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">

          {/* OUTER PREVIEW CARD */}
          <motion.div
            variants={item}
            className="md:col-span-2 bg-[#F6F6F1] p-6 overflow-hidden"
          >
            {/* INNER PREVIEW (CUT RIGHT) */}
            <div className="bg-white border border-gray-200 p-6 w-[110%]">
              
              {/* Tabs */}
              <div className="flex gap-4 text-sm text-gray-500 mb-5">
                <span className="text-black font-medium">Overview</span>
                <span>Events</span>
                <span>Settings</span>
              </div>

              {/* KPI */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["Events", "CTR", "Retention"].map((k, i) => (
                  <div key={i} className="bg-[#F6F6F1] p-4">
                    <p className="text-xs text-gray-500">{k}</p>
                    <p className="text-lg font-semibold">
                      {i === 0 ? "6,725" : i === 1 ? "7.9%" : "71%"}
                    </p>
                  </div>
                ))}
              </div>

              {/* CHART (Gradient ONLY here) */}
              <div className="h-44 bg-[#F6F6F1] p-4 flex items-end gap-2 mb-6">
                {[70, 50, 60, 40, 65, 55].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(244,123,32,0.50) 0%, rgba(245,208,0,0.30) 50%, rgba(134,210,150,0.40) 100%)",
                    }}
                  />
                ))}
              </div>

              {/* Bottom */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F6F6F1] p-4 text-sm">
                  <p className="text-xs text-gray-500 mb-1">API Endpoint</p>
                  <p>/api/v1/capture</p>
                </div>

                <div className="bg-[#F6F6F1] p-4 text-sm">
                  <p className="text-xs text-gray-500 mb-2">Recent Events</p>
                  <div className="space-y-1 text-xs text-gray-700">
                    <p>user_signup</p>
                    <p>button_click</p>
                    <p>checkout_start</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* TESTIMONIAL */}
          <motion.div
            variants={item}
            className="bg-[#F6F6F1] p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs text-gray-500 mb-4">
                TRANSFORMING PRODUCT ANALYTICS
              </p>

              <div className="bg-white h-32 flex items-center justify-center mb-6">
                Your Customer
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                “Advaita helped us identify critical drop-offs instantly. 
                What used to take days now takes minutes.”
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-8 h-8 bg-gray-300"></div>
              <div>
                <p className="text-sm font-medium">Product Lead</p>
                <p className="text-xs text-gray-500">SaaS Company</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURES */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-4 gap-6 mt-20"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#F6F6F1] p-6"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white mb-4">
                {f.icon}
              </div>

              <h4 className="font-medium text-gray-900 mb-2">
                {f.title}
              </h4>

              <p className="text-sm text-gray-600">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}