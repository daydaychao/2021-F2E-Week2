<script setup lang="ts">
import { useBikeStore } from '@/stores/bike'

const bikeStore = useBikeStore()
const emit = defineEmits(['GpsEvent'])

// 自行車站可選擇城市
async function getGPS() {
  console.log('getGPS')
  if (!navigator.geolocation) {
    alert('抓不到您的GPS資料')
  }
  await navigator.geolocation.getCurrentPosition(function (location) {
    console.log('你的gps', location.coords.latitude, location.coords.longitude)
    bikeStore.setLocation(location.coords.latitude, location.coords.longitude)

    //test
    // bikeStore.setLocation(22.6037664, 120.3010409)
    // console.log('location', bikeStore.userLocation[0], bikeStore.userLocation[1])
    emit('GpsEvent')
  })
}
</script>

<template>
  <section class="GPS">
    <article>
      <span v-if="!bikeStore.userLocation[0] && !bikeStore.userLocation[1]"
        >按下GPS讓我們直接<br />幫您定位位置<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200">
          <path
            d="M0 972.138V556.629c2.192-43.973 37.788-75.724 76.898-76.252h186.106c53.196-40.854 90.897-97.554 142.165-138.611c18.094-14.432 32.095-30.479 42.003-48.142c32.214-63.281 12.695-136.954 58.481-187.399c92.008-39.482 202.231 15.751 233.279 102.423c24.405 70.78 8.052 141.366-22.294 203.877c109.856-.182 219.71.708 329.563 1.292c89.434 6.678 153.202 66.892 153.797 152.504c-.244 86.275-74.623 149.017-153.797 150.565h-129.24c-4.308 25.417-12.709 48.465-25.202 69.144c7.239 53.145-9.327 105.247-41.356 142.812c-17.576 306.75-419.443 124.761-569.952 120.193H76.898C32.617 1046.939.528 1011.445 0 972.138zm277.221 0c120.425 2.591 531.909 184.658 492.407-76.252c43.546-23.471 60.301-86.286 33.603-126.01c40.566-40.005 52.118-90.265 12.925-129.887c38.771 0 77.113-.216 115.023-.646c37.911-.431 76.253-.646 115.024-.646c44.371-.933 75.122-33.487 75.606-72.374c-1.014-45.976-35.914-75.137-75.606-75.606c-150.385-.008-298.632-1.276-438.126-1.292c12.555-100.763 132.769-237.585 10.017-316.963c-19.652-9.652-35.367-13.749-55.896-10.017c-3.446 1.723-5.385 3.447-5.816 5.17c-.431 1.723-1.076 4.523-1.938 8.4c-13.044 79.87-25.221 159.73-87.237 212.601c-68.263 52.343-108.514 134.749-186.752 168.014h-3.231l-.003 415.508z"
            fill="currentColor"
          /></svg
      ></span>
    </article>
    <article class="GPS_circle" @click="getGPS()">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z" fill="white" /></svg>GPS
    </article>
  </section>
</template>
