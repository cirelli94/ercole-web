<template>
  <BaseLayoutColumns v-if="isMounted">
    <PatchAdvisorFilters slot="col1" />
    <FullTable
      slot="col2"
      placeholder="Search on Oracle Patch Advisor"
      :keys="keys"
      :tableData="getOraclePatchAdvisor"
      @clickedRow="handleClickedRow"
      isClickable
    >
      <template slot="headData">
        <v-th sortKey="hostname">Hostname</v-th>
        <v-th sortKey="dbname">Database</v-th>
        <v-th sortKey="dbver">Version</v-th>
        <v-th sortKey="date">Release Date</v-th>
        <v-th sortKey="description">PSU</v-th>
        <v-th sortKey="fourMonthsText">4 Months</v-th>
        <v-th sortKey="sixMonthsText">6 Months</v-th>
        <v-th sortKey="twelveMonthsText">12 Months</v-th>
      </template>

      <template slot="bodyData" slot-scope="rowData">
        <HostLink :hostname="[rowData.scope.hostname, rowData.scope.dbname]" />
        <TdContent :value="rowData.scope.dbname" />
        <TdContent :value="rowData.scope.dbver" />
        <TdContent :value="rowData.scope.date" dataType="date" />
        <TdContent :value="rowData.scope.description" />
        <TdIcon :value="rowData.scope.fourMonths" />
        <TdIcon :value="rowData.scope.sixMonths" />
        <TdIcon :value="rowData.scope.twelveMonths" />
      </template>

      <exportButton
        slot="export"
        url="hosts/technologies/oracle/databases/patch-advisors"
        expName="oraclePatchAdvisor"
      />
    </FullTable>
  </BaseLayoutColumns>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import hostnameLinkRow from '@/mixins/hostnameLinkRow.js'
import BaseLayoutColumns from '@/components/common/BaseLayoutColumns.vue'
import FullTable from '@/components/common/Table/FullTable.vue'
import exportButton from '@/components/common/exportButton.vue'
import TdContent from '@/components/common/Table/TdContent.vue'
import TdIcon from '@/components/common/Table/TDIcon.vue'
import HostLink from '@/components/common/Table/HostLink.vue'
import PatchAdvisorFilters from '@/components/databases/oracle/patchAdvisor/PatchAdvisorFilters.vue'

export default {
  mixins: [hostnameLinkRow],
  components: {
    BaseLayoutColumns,
    FullTable,
    exportButton,
    TdContent,
    TdIcon,
    HostLink,
    PatchAdvisorFilters
  },
  data() {
    return {
      keys: [
        'hostname',
        'dbname',
        'dbver',
        'date',
        'description',
        'fourMonthsText',
        'sixMonthsText',
        'twelveMonthsText'
      ],
      isMounted: false
    }
  },
  async beforeMount() {
    await this.getPatchAdvisor().then(() => (this.isMounted = true))
  },
  methods: {
    ...mapActions(['getPatchAdvisor'])
  },
  computed: {
    ...mapGetters(['getOraclePatchAdvisor'])
  }
}
</script>

<style lang="scss" scoped></style>
