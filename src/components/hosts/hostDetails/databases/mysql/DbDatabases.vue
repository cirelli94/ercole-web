<template>
  <b-tab-item label="Databases" v-if="databases.length > 0">
    <FullTable
      :tableData="databases"
      :keys="[]"
      hideSearch
      hidePerpage
      hidePagination
      hideTopTable
    >
      <template slot="headData">
        <v-th sortKey="name">Name</v-th>
        <v-th sortKey="charset">Charset</v-th>
        <v-th sortKey="collation">Collation</v-th>
        <v-th sortKey="encrypted">Encrypted</v-th>
      </template>

      <template slot="bodyData" slot-scope="rowData">
        <TdContent :value="rowData.scope.name" />
        <TdContent :value="rowData.scope.charset" />
        <TdContent :value="rowData.scope.collation" />
        <TdContent :value="rowData.scope.encrypted" />
      </template>
    </FullTable>
  </b-tab-item>
</template>

<script>
import FullTable from '@/components/common/Table/FullTable.vue'
import TdContent from '@/components/common/Table/TdContent.vue'

export default {
  props: {
    databases: {
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
