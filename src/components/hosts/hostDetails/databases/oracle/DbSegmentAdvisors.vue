<template>
  <b-tab-item label="Segment Advisors" v-if="segmentAdvisors.length > 0">
    <FullTable
      :tableData="segmentAdvisors"
      :keys="[]"
      hideSearch
      hidePerpage
      hidePagination
      hideTopTable
    >
      <template slot="headData">
        <v-th sortKey="reclaimable">Reclaimable</v-th>
        <v-th sortKey="segmentName">Segment Name</v-th>
        <v-th sortKey="segmentOwner">Segment Owner</v-th>
        <v-th sortKey="segmentType">Segment Type</v-th>
        <v-th sortKey="partitionName">Partition</v-th>
        <v-th sortKey="recommendation">Recommendation</v-th>
      </template>

      <template slot="bodyData" slot-scope="rowData">
        <TdContent :value="rowData.scope.reclaimable" />
        <TdContent :value="rowData.scope.segmentName" />
        <TdContent :value="rowData.scope.segmentOwner" />
        <TdContent :value="rowData.scope.segmentType" />
        <TdContent :value="rowData.scope.partitionName" />
        <TdContent :value="rowData.scope.recommendation" />
      </template>
    </FullTable>
  </b-tab-item>
</template>

<script>
import FullTable from '@/components/common/Table/FullTable.vue'
import TdContent from '@/components/common/Table/TdContent.vue'

export default {
  props: {
    segmentAdvisors: {
      type: Array,
      default: null
    }
  },
  components: {
    FullTable,
    TdContent
  }
}
</script>

<style lang="scss" scoped></style>
