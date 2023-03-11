<template>
  <main class="bg-gray-500">
    <hero-section />
    <professional-section />
    <services-section />
    <section class="py-20 px-5 md:flex gap-10 md:pl-40 md:pr-0 md:py-20 bg-white">
      <div class="md:w-1/2">
        <h2 class="text-4xl font-serif font-semibold header">
          Additional services offered
        </h2>
        <p class="mt-5">
          As of January 1, 2023, pharmacists at Atlas Pharmacy are authorized to
          prescribe medications for certain minor ailments. All you need is your
          health card. Only the following conditions fall under the Minor
          Ailment Treatments: – Allergic rhinitis (nasal allergies) – Candidal
          stomatitis (oral thrush) – Conjunctivitis (pinkeye) – Dermatitis
          (atopic, eczema, allergic and contact) – Dysmenorrhea (menstrual
          cramps) – Gastroesophageal reflux disease (GERD) – Hemorrhoids –
          Herpes labialis (cold sores) – Impetigo (skin infection) – Insect
          bites and urticaria (hives) – Tick bites, post-exposure prophylaxis to
          prevent Lyme disease – Musculoskeletal sprains and strains – Urinary
          tract infections (UTI).
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:w-1/2">
        <img
          src="~/assets/imgs/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare-stethoscope-black-woman-doctor.compressed.jpg"
          class="w-full h-auto rounded-lg slideRight"
        />
      </div>
    </section>
    <nurses-section />
    <news-letter />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
