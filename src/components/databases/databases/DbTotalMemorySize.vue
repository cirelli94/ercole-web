<template>
  <BoxContent title="Total Memory Size" border :mbottom="false">
    <CardStats
      :cardStatValue="databases.stats['total-memory-size'] | prettyBytes"
    />
  </BoxContent>
</template>

<script>
import { mapState } from 'vuex'
import BoxContent from '@/components/common/BoxContent.vue'
import CardStats from '@/components/common/CardStats.vue'

export default {
  components: {
    BoxContent,
    CardStats
  },
  computed: {
    ...mapState(['databases'])
  }
}
</script>

<style lang="scss" scoped></style>
