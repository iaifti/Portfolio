import { motion } from "framer-motion";

const education = [
	{
		school: "Southeast Missouri State University",
		degree: "Bachelor of Science in Computer Science",
		period: "2022 — 2025",
		details: ["Software Engineering", "Data Engineering", "Systems Design"],
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: (index) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
	}),
};

const Education = () => (
	<section id="education" style={{ background: "#111008", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,7vw,7rem)", position: "relative", overflow: "hidden" }}>
		<style>{`
			@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');
			.education-detail { display:flex; align-items:center; gap:8px; }
			.education-detail::before { content:'+'; color:#f59e0b; font-family:'DM Mono',monospace; font-size:11px; opacity:0.6; }
		`}</style>

		<div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(245,158,11,0.1)" }} />
		<div style={{ position: "absolute", top: "5%", left: "-10%", width: "50vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

		<div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
			<div style={{ marginBottom: "4rem" }}>
				<div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
					<div style={{ width: 28, height: 2, background: "#f59e0b", borderRadius: 2 }} />
					<span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: "#f59e0b", textTransform: "uppercase" }}>Education</span>
				</div>
				<h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", color: "#fff", letterSpacing: "0.02em", lineHeight: 0.9, margin: 0 }}>
					Academic<br /><span style={{ color: "transparent", WebkitTextStroke: "2px rgba(245,158,11,0.35)" }}>Foundation</span>
				</h2>
			</div>

			<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "1.5rem" }}>
				{education.map((item, index) => (
					<motion.div
						key={item.school}
						custom={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-60px" }}
						variants={cardVariants}
						style={{ background: "#141108", border: "1px solid rgba(245,158,11,0.12)", borderRadius: 10, padding: "clamp(1.25rem,3vw,2rem)", position: "relative", transition: "all 0.25s ease" }}
						onMouseEnter={(event) => {
							event.currentTarget.style.borderColor = "rgba(245,158,11,0.35)";
							event.currentTarget.style.background = "#1a1500";
							event.currentTarget.style.boxShadow = "0 8px 32px rgba(245,158,11,0.08)";
						}}
						onMouseLeave={(event) => {
							event.currentTarget.style.borderColor = "rgba(245,158,11,0.12)";
							event.currentTarget.style.background = "#141108";
							event.currentTarget.style.boxShadow = "none";
						}}
					>
						<div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }} />
						<div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.2em", color: "rgba(245,158,11,0.4)", marginBottom: "1rem" }}>{String(index + 1).padStart(2, "0")}</div>
						<h3 style={{ fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "clamp(0.9rem,1.5vw,1.05rem)", color: "#fff", margin: "0 0 8px" }}>{item.degree}</h3>
						<div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: "1.25rem" }}>
							<span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: "#f59e0b" }}>{item.school}</span>
							<span style={{ color: "rgba(245,158,11,0.2)", fontSize: 10 }}>·</span>
							<span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,200,80,0.3)" }}>{item.period}</span>
						</div>
						<div style={{ height: 1, background: "rgba(245,158,11,0.08)", marginBottom: "1.25rem" }} />
						<div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px" }}>
							{item.details.map((detail) => <span key={detail} className="education-detail" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,230,150,0.38)", fontWeight: 300 }}>{detail}</span>)}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default Education;
