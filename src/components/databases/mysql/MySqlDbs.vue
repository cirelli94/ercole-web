<template>
  <FullTable
    placeholder="Search on MySQL Databases"
    :keys="keys"
    :tableData="getAllMysqlDbs"
    @clickedRow="handleClickedRow"
    isClickable
  >
    <template slot="headData">
      <v-th sortKey="name">DB Name</v-th>
      <v-th sortKey="version">DB Version</v-th>
      <v-th sortKey="hostname">Hostname</v-th>
      <v-th sortKey="environment">Env.</v-th>
      <v-th sortKey="charsetSystem">Charset</v-th>
      <v-th sortKey="architecture">Architecture</v-th>
      <v-th sortKey="bufferPoolSize">Buffer</v-th>
      <v-th sortKey="edition">Edition</v-th>engine
      <v-th sortKey="engine">Engine</v-th>
      <v-th sortKey="platform">Platform</v-th>
      <v-th sortKey="version">Version</v-th>
      <v-th sortKey="highAvailability">HA</v-th>
    </template>

    <template slot="bodyData" slot-scope="rowData">
      <TdContent :value="rowData.scope.name" />
      <TdContent :value="rowData.scope.version" />
      <HostLink :hostname="[rowData.scope.hostname, rowData.scope.name]" />
      <TdContent :value="rowData.scope.environment" />
      <TdContent :value="rowData.scope.charsetSystem" />
      <TdContent :value="rowData.scope.architecture" />
      <TdContent :value="rowData.scope.bufferPoolSize" />
      <TdContent :value="rowData.scope.edition" />
      <TdContent :value="rowData.scope.engine" />
      <TdContent :value="rowData.scope.platform" />
      <TdContent :value="rowData.scope.version" />
      <TdIcon :value="rowData.scope.highAvailability" />
    </template>

    <ExportButton
      slot="export"
      url="hosts/technologies/mysql/databases"
      expName="mysqlDbs"
    />
  </FullTable>
</template>

<script>
import { mapGetters } from 'vuex'
import hostnameLinkRow from '@/mixins/hostnameLinkRow.js'
import FullTable from '@/components/common/Table/FullTable.vue'
import ExportButton from '@/components/common/exportButton.vue'
import TdContent from '@/components/common/Table/TdContent.vue'
import TdIcon from '@/components/common/Table/TDIcon.vue'
import HostLink from '@/components/common/Table/HostLink.vue'

export default {
  mixins: [hostnameLinkRow],
  components: {
    FullTable,
    ExportButton,
    TdContent,
    TdIcon,
    HostLink
  },
  data() {
    return {
      keys: [
        'name',
        'version',
        'hostname',
        'environment',
        'charsetSystem',
        'architecture',
        'bufferPoolSize',
        'edition',
        'engine',
        'platform',
        'version',
        'highAvailability'
      ]
    }
  },
  computed: {
    ...mapGetters(['getAllMysqlDbs'])
  }
}
</script>

<style lang="scss" scoped></style>