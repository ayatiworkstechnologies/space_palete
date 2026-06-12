"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-32 md:pt-40 lg:px-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            SPACE PALETTE <br className="hidden md:block" />
            <span className="mt-2 block text-xl font-light text-[#E16E38] md:mt-4 md:text-2xl lg:text-2xl">
              Rooted in Nature, Shaped by People.
            </span>
          </motion.h2>

          <div className="mx-auto mt-8 h-px w-24 bg-[#E16E38]/50 md:mt-12" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-5xl space-y-6 text-center text-lg font-light leading-loose text-white/90 md:mt-12 md:leading-relaxed"
          >
            <p>
              Space Palette began with a simple observation: the spaces we spend our lives in have the power to shape how we feel, connect, and belong. As designers, we found ourselves constantly drawn to places where nature and human life existed in harmony, where light filtered through trees, where buildings responded to their surroundings, and where every element felt purposeful yet effortless.
            </p>

            <p>
              That connection became the foundation of our practice.
            </p>

            <p>
              Over the years, Space Palette has grown into a multidisciplinary studio working across commercial interiors, architecture, landscapes, and residential design. Yet regardless of scale or typology, our approach remains the same to create spaces that feel grounded, meaningful, and deeply connected to their environment.
            </p>

            <p>
              We have always believed that good design is not about imposing ideas onto a place. It is about listening first to the site, to the people who will inhabit it, and to the stories waiting to unfold within it. Every project becomes a response to these conversations, shaped by context, climate, materiality, and human experience.
            </p>

            <p>
              Nature sits at the heart of this process. Not as an aesthetic choice, but as a guiding principle. We are inspired by the way natural systems adapt, evolve, and coexist. This perspective influences how we design workplaces that encourage wellbeing, homes that feel calm and nurturing, and landscapes that invite people to reconnect with the outdoors.
            </p>

            <p>
              Our work is often a search for balance between built and natural, functional and emotional, contemporary and timeless. We are drawn to honest materials, thoughtful detailing, and spaces that age gracefully over time. More than creating visually compelling environments, we strive to create places that feel lived in, loved, and relevant for years to come.
            </p>

            <p>
              As a studio, we see sustainability not as a destination but as a responsibility. Every decision, however small, is an opportunity to reduce impact, make conscious choices, and contribute positively to the larger ecosystem. We believe design has the potential to influence behaviour, encourage stewardship, and foster a greater respect for the world around us.
            </p>

            <p>
              Looking ahead, our ambition reaches beyond the projects we design. We aspire to build a practice that actively promotes environmental awareness, supports community wellbeing, and demonstrates how thoughtful design can create lasting value for both people and the planet.
            </p>

            <p>
              Space Palette is, ultimately, a reflection of what we care about most about nature, people, and the spaces that bring them together.
            </p>

            <p>
              Every project is a chance to learn from the land, give back to the community, and create something that leaves a positive mark long after it is built.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
