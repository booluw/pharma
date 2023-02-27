<template>
  <div class="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center md:py-5">
    <div class="h-full w-full overflow-y-auto md:w-1/3 bg-white p-10 pb-5 md:rounded-xl shadow-lg">
      <div class="border-b pb-3 flex justify-between items-center">
        <h2 class="text-lg font-serif">Get A Quote</h2>
        <button
          class="rounded-full p-1 text-red-500 hover:bg-red-500 hover:text-white"
          @click="$emit('close')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form class="my-5">
        <label class="flex flex-col" for="name">
          <span class="text-sm">Name:</span>
          <input
            id="name"
            v-model="user.name"
            type="text"
            class="border-b border-green-300 outline-none"
            required
          />
        </label>
        <label class="flex flex-col mt-5" for="email">
          <span class="text-sm">Email:</span>
          <input
            id="email"
            v-model="user.email"
            type="email"
            class="border-b border-green-300 outline-none"
            required
          />
        </label>
        <label class="flex flex-col mt-5" for="phone">
          <span class="text-sm">Phone Number:</span>
          <input
            id="phone"
            v-model="user.phone"
            type="tel"
            class="border-b border-green-300 outline-none"
            required
          />
        </label>
        <label class="flex flex-col mt-5" for="medication_name">
          <span class="text-sm">Medication Name:</span>
          <input
            id="medication_name"
            v-model="user.medication_name"
            type="text"
            class="border-b border-green-300 outline-none"
            required
          />
        </label>
        <div class="md:flex gap-5 md:mr-5">
          <label class="md:w-1/2 flex flex-col mt-5" for="medication_strength">
            <span class="text-sm">Medication Strength:</span>
            <input
              id="medication_strength"
              v-model="user.medication_strength"
              type="number"
              class="border-b border-green-300 outline-none"
              required
            />
          </label>
          <label class="md:w-1/2 flex flex-col mt-5" for="medication_strength">
            <span class="text-sm">Medication Quality:</span>
            <input
              id="medication_quality"
              v-model="user.medication_quantity"
              type="number"
              class="border-b border-green-300 outline-none"
              required
            />
          </label>
        </div>
        <label class="flex flex-col mt-5" for="note">
          <span class="text-sm">Note:</span>
          <textarea
            id="note"
            v-model="user.other_details"
            class="border-b border-green-300 outline-none"
          ></textarea>
        </label>
        <button
          type="submit"
          class="font-semibold text-lg md:font-bold w-full mt-16 md:mt-5 px-3 py-4 rounded-2xl bg-[#30BEA0] border-2 border-[#30BEA0] text-white opacity-80 hover:opacity-100 hover:-translate-y-[1px] hover:transform hover:shadow-md transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetAQuoteModal",
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone: '',
        medication_name: '',
        medication_strength: '',
        medication_quantity: '',
        other_details: ''
      }
    }
  },
}
</script>

<style>

</style>