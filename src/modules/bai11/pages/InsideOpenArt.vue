<template>
    <div class="bai11">
        <h1 class="bai11-heading">Inside Open Art</h1>
        <div class="feature-list">
            <FeatureCard
                v-for="(feature, index) in features"
                :key="index"
                :feature="feature"
            />
        </div>
    </div>
</template>

<script>
import FeatureCard from '@/modules/bai11/components/FeatureCard.vue';
export default {
    components: {
        FeatureCard,
    },
    data() {
        return {
            features: [
                {
                    icon: require(`@/assets/images/bai11/grid-icon.png`),
                    title: '4pt grid system',
                    content:
                        'Base on 4pt grid system. Our UI kit help you create perfect white space',
                },
                {
                    icon: require(`@/assets/images/bai11/color-icon.png`),
                    title: 'Color style',
                    content:
                        'All color in OpenArt are styled. You can change all design color with one click',
                },
                {
                    icon: require(`@/assets/images/bai11/font-icon.png`),
                    title: 'Free font',
                    content:
                        'OpenArt use Epilogue font family Available with open licence in gooogle font',
                },
                {
                    icon: require(`@/assets/images/bai11/switch-icon.png`),
                    title: 'Darkmode avaiable',
                    content:
                        'Our UI Kit support darkmode Chage your design to dark mode with one click',
                },
                {
                    icon: require(`@/assets/images/bai11/customize-icon.png`),
                    title: 'Easy to customize',
                    content: 'Create any design with OpenArt UI kits ',
                },
                {
                    icon: require(`@/assets/images/bai11/variant-icon.png`),
                    title: 'Variant components',
                    content: 'All component art variant, easy to design, easy to control',
                },
            ],
        };
    },
};
</script>

<style scoped>
.bai11 {
    background-image: url('../../../assets/images/bai11/bai11-background-img.png');
    min-height: 100vh;
    padding: 128px 64px 64px;
}

.bai11-heading {
    font-family: Epilogue;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: #000000;
}
.feature-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 92px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .bai11 {
        padding: 64px 16px;
    }

    .feature-item {
        width: 100%;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) and (max-width: 767px) {
    .feature-item {
        width: 100%;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .feature-item {
        width: 46%;
    }
}

</style>