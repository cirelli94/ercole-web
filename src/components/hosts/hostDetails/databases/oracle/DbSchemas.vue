<template>
  <b-tab-item label="Schemas" v-if="schemas.length > 0">
    <FullTable
      :tableData="schemas"
      :keys="[]"
      hideSearch
      hidePerpage
      hidePagination
      hideTopTable
    >
      <template slot="headData">
        <v-th sortKey="user">User</v-th>
        <v-th sortKey="total">Total</v-th>
        <v-th sortKey="tables">Tables</v-th>
        <v-th sortKey="indexes">Indexes</v-th>
        <v-th sortKey="lob">LOB</v-th>
      </template>

      <template slot="bodyData" slot-scope="rowData">
        <TdContent :value="rowData.scope.user" />
        <TdContent :value="rowData.scope.total" />
        <TdContent :value="rowData.scope.tables" />
        <TdContent :value="rowData.scope.indexes" />
        <TdContent :value="rowData.scope.lob" />
      </template>
    </FullTable>
  </b-tab-item>
</template>

<script>
import FullTable from '@/components/common/Table/FullTable.vue'
import TdContent from '@/components/common/Table/TdContent.vue'

export default {
  props: {
    schemas: {
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
