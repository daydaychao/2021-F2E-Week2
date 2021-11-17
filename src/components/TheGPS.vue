<script setup lang="ts">
import { ref, reactive } from 'vue'
defineProps<{ msg: string }>()
</script>

<template>
  <section class="GPS">
    <article>
      按下GPS讓我們直接幫您定位位置
      <div class="icon">
        <!-- 我找不到一摸一樣的手指 figma沒看到圖檔 -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
          <path d="M6.5 15H9a1.502 1.502 0 0 0 1.307-2.236a1.5 1.5 0 0 0 .31-2.264a1.494 1.494 0 0 0 .297-1.5H14.5c.827 0 1.5-.673 1.5-1.5S15.327 6 14.5 6H8.333l1.466-2.75a1.502 1.502 0 0 0-2.381-1.789l-.011.012L4 5.21V4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.691l2.276 1.138A.496.496 0 0 0 6.5 15zm-4-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm4.118 0L4 12.691V6.694L8.143 2.15a.5.5 0 0 1 .782.614l-1.866 3.5a.502.502 0 0 0 .442.735h7a.5.5 0 0 1 0 1h-5a.5.5 0 0 0 0 1a.5.5 0 0 1 0 1a.5.5 0 0 0 0 1a.5.5 0 0 1 0 1h-.5a.5.5 0 0 0 0 1a.5.5 0 0 1 0 1H6.619z" fill="currentColor" />
        </svg>
      </div>
    </article>
    <article class="GPS_circle">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z" fill="currentColor" /></svg>
      </div>
      GPS
    </article>
  </section>
</template>
