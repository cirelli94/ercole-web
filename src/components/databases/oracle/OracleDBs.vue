<template>
  <div class="columns">
    <div class="column is-4">
      <ButtonGroup groupTitle="Show more info:">
        <b-button
          class="mr-1"
          size="is-small"
          :type="hideReliability ? 'is-light' : 'is-light reliability'"
          @click="hideReliability = !hideReliability"
        >
          Reliability
        </b-button>
        <b-button
          class="mr-1"
          size="is-small"
          :type="hideSpaceUsed ? 'is-light' : 'is-light spaceUsed'"
          @click="hideSpaceUsed = !hideSpaceUsed"
        >
          Space Used
        </b-button>
        <b-button
          class="mr-1"
          size="is-small"
          :type="hideCharset ? 'is-light' : 'is-light charset'"
          @click="hideCharset = !hideCharset"
        >
          Charset
        </b-button>
      </ButtonGroup>
      <OracleFilters />
    </div>
    <div class="column is-8">
      <FullTable
        placeholder="Search on Oracle DBs"
        :keys="keys"
        :tableData="getAllOracleDBs"
        @clickedRow="handleClickedRow"
        isClickable
      >
        <template slot="headData">
          <v-th sortKey="name">DB Name</v-th>
          <v-th sortKey="uniqueName">Unique Name</v-th>
          <v-th
            sortKey="archivelog"
            class="reliability"
            :class="{ hide: hideReliability }"
            >Archivelog Mode</v-th
          >
          <v-th
            sortKey="dataguard"
            class="reliability"
            :class="{ hide: hideReliability }"
            >DR</v-th
          >
          <v-th
            sortKey="ha"
            class="reliability"
            :class="{ hide: hideReliability }"
            >HA</v-th
          >
          <v-th
            sortKey="datafileSize"
            class="spaceUsed"
            :class="{ hide: hideSpaceUsed }"
            >Datafile (GB)</v-th
          >
          <v-th
            sortKey="segmentsSize"
            class="spaceUsed"
            :class="{ hide: hideSpaceUsed }"
            >Segment (GB)</v-th
          >
          <v-th sortKey="charset" class="charset" :class="{ hide: hideCharset }"
            >Charset</v-th
          >
          <v-th sortKey="version">DB Version</v-th>
          <v-th sortKey="work">Work</v-th>
          <v-th sortKey="cpuCount">CPU Count</v-th>
          <v-th sortKey="blockSize">Block Size</v-th>
          <v-th sortKey="status">Status</v-th>
          <v-th sortKey="memory">Memory (GB)</v-th>
          <v-th sortKey="hostname">Hostname</v-th>
          <v-th sortKey="environment">Env.</v-th>
        </template>

        <template slot="bodyData" slot-scope="rowData">
          <TdContent :value="rowData.scope.name" />
          <TdContent :value="rowData.scope.uniqueName" />
          <TdIcon
            :value="rowData.scope.archivelog"
            :class="{ hide: hideReliability }"
          />
          <TdIcon
            :value="rowData.scope.dataguard"
            :class="{ hide: hideReliability }"
          />
          <TdIcon
            :value="rowData.scope.ha"
            :class="{ hide: hideReliability }"
          />
          <TdContent
            :value="rowData.scope.datafileSize | formatNumber('0.00')"
            :class="{ hide: hideSpaceUsed }"
          />
          <TdContent
            :value="rowData.scope.segmentsSize | formatNumber('0.00')"
            :class="{ hide: hideSpaceUsed }"
          />
          <TdContent
            :value="rowData.scope.charset"
            :class="{ hide: hideCharset }"
          />
          <TdContent :value="rowData.scope.version" />
          <TdContent :value="rowData.scope.work | formatNumber('0')" />
          <TdContent :value="rowData.scope.cpuCount" />
          <TdContent :value="rowData.scope.blockSize" />
          <TdContent :value="rowData.scope.status" />
          <TdContent :value="rowData.scope.memory | formatNumber('0.00')" />
          <HostLink :hostname="[rowData.scope.hostname, rowData.scope.name]" />
          <TdContent :value="rowData.scope.environment" />
        </template>

        <ExportButton
          slot="export"
          url="hosts/technologies/oracle/databases"
          expName="oracleDbs"
        />
      </FullTable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import hostnameLinkRow from '@/mixins/hostnameLinkRow.js'
import FullTable from '@/components/common/Table/FullTable.vue'
import ExportButton from '@/components/common/exportButton.vue'
import TdContent from '@/components/common/Table/TdContent.vue'
import TdIcon from '@/components/common/Table/TDIcon.vue'
import HostLink from '@/components/common/Table/HostLink.vue'
import ButtonGroup from '@/components/common/ButtonGroup.vue'
import OracleFilters from '@/components/databases/oracle/OracleFilters.vue'

export default {
  mixins: [hostnameLinkRow],
  components: {
    FullTable,
    ExportButton,
    TdContent,
    TdIcon,
    HostLink,
    ButtonGroup,
    OracleFilters
  },
  data() {
    return {
      keys: [
        'name',
        'version',
        'hostname',
        'environment',
        'charset',
        'memory',
        'datafileSize',
        'segmentsSize',
        'archivelog',
        'dataguard',
        'ha',
        'work',
        'blockSize',
        'cpuCount',
        'status',
        'uniqueName'
      ],
      hideReliability: true,
      hideSpaceUsed: true,
      hideCharset: true
    }
  },
  computed: {
    ...mapGetters(['getAllOracleDBs'])
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}

.reliability {
  box-shadow: inset 0 -14px 0 -10px #f37021 !important;
}
.spaceUsed {
  box-shadow: inset 0 -14px 0 -10px #fcd217 !important;
}
.charset {
  box-shadow: inset 0 -14px 0 -10px #9c4d1e !important;
}
</style>
