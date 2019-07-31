<template>
  <section class="team" id="team">
    <b-container>
      <h2 class="title title--white">
        {{ $t('home.team') }}
        <Underline :mode="'grey'"></Underline>
      </h2>

      <div class="team__members">
        <div class="team__row">
          <div class="team__col"
               v-for="(memberObj, index) in members"
               :key="index">
            <TeamMember :photo="memberObj.photo">
              <template slot="position">{{ memberObj.position }}</template>
              <template slot="name">
                {{ memberObj.name.split(' ')[0] }}
                <br>
                {{ memberObj.name.split(' ')[1] }}
              </template>
              <template slot="vitae">{{ memberObj.vitae }}</template>
            </TeamMember>
          </div>
        </div>
        <div class="d-flex justify-content-between"></div>
      </div>
    </b-container>
  </section>
</template>

<script>
import Underline from '@/components/_ui-elements/Underline.vue';
import TeamMember from '@/components/TeamMember.vue';

// Photos
import Vas from '@/assets/img/members/vas.jpg';
import Fen from '@/assets/img/members/fen.jpg';
import Chern from '@/assets/img/members/chern.jpg';
import Kerya from '@/assets/img/members/kerya2.jpg';
import Boh from '@/assets/img/members/boh.jpg';
import As from '@/assets/img/members/as.jpg';
import Mak from '@/assets/img/members/mak.jpg';
import Vit from '@/assets/img/members/vit.jpg';

export default {
  name: 'TeamSection',
  components: {
    Underline,
    TeamMember,
  },
  data() {
    return {
      members: [
        {
          position: this.$t('home.members.vas.position'),
          name: this.$t('home.members.vas.name'),
          vitae: this.$t('home.members.vas.vitae'),
          photo: Vas,
        },
        {
          position: this.$t('home.members.fen.position'),
          name: this.$t('home.members.fen.name'),
          vitae: this.$t('home.members.fen.vitae'),
          photo: Fen,
        },
        {
          position: this.$t('home.members.chern.position'),
          name: this.$t('home.members.chern.name'),
          vitae: this.$t('home.members.chern.vitae'),
          photo: Chern,
        },
        {
          position: this.$t('home.members.kerya.position'),
          name: this.$t('home.members.kerya.name'),
          vitae: this.$t('home.members.kerya.vitae'),
          photo: Kerya,
        },
        {
          position: this.$t('home.members.boh.position'),
          name: this.$t('home.members.boh.name'),
          vitae: this.$t('home.members.boh.vitae'),
          photo: Boh,
        },
        {
          position: this.$t('home.members.as.position'),
          name: this.$t('home.members.as.name'),
          vitae: this.$t('home.members.as.vitae'),
          photo: As,
        },
        {
          position: this.$t('home.members.mak.position'),
          name: this.$t('home.members.mak.name'),
          vitae: this.$t('home.members.mak.vitae'),
          photo: Mak,
        },
        {
          position: this.$t('home.members.vit.position'),
          name: this.$t('home.members.vit.name'),
          vitae: this.$t('home.members.vit.vitae'),
          photo: Vit,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

  .team {
    background: $blue--pale url('~@/assets/img/bg-team.png') center center / cover;
    padding: 130px 0 82px;

    &__row {
      display: grid;
      grid-template-columns: repeat(auto-fit, 376px);
      grid-column-gap: 10px;
      grid-row-gap: 55px;
      justify-content: space-between;
    }

    &__members {
      padding-top: 95px;
    }
  }

  @media (max-width: 1199px) {
    .team {
      padding: 108px 0 82px;

      &__row {
        grid-template-columns: repeat(auto-fit, 236px);
      }

      &__members {
        padding-top: 72px;
      }
    }
  }

  @media (max-width: 991px) {
    .team {
      &__row {
        grid-template-columns: repeat(auto-fit,  226px);
      }
    }
  }

  @media (max-width: 767px) {
    .team {
      padding: 50px 0;

      &__members {
        padding-top: 34px;
      }
    }
  }

  @media (max-width: 575px) {
    .team {
      &__row {
        grid-template-columns: repeat(1,  226px);
        justify-content: center;
      }

      &__col {
        max-width: 226px;
      }
    }
  }
</style>
