<template>
    <el-col class="product-card" :span="viewOption[0]">
        <el-col :span="viewOption[1]">
            <img class="card-img" :src="imageUrl" alt="img" />
            <star-rating
                :star-size="13"
                :round-start-rating="false"
                :show-rating="false"
                active-color="#E9A426"
                :rating="product.rating"
                read-only
                inline
            >
            </star-rating>
            <a href="#" class="reviews"> Reviews({{ product.reviews }}) </a>
        </el-col>
        <el-col class="product-card-body" :span="viewOption[2]">
            <h5 class="code">{{ product.code }}</h5>
            <p class="description">{{ product.description }}</p>
            <span v-if="product.discount > 0" class="basic-price">
                ${{ product.price }}
            </span>
            <span class="discount-price fw-bold"> ${{ discountPrice }} </span>
            <button class="app-btn plain add-to-cart">
                <img :src="cartIcon" alt="cart icon" />
                Add To Cart
            </button>
        </el-col>
        <el-col v-if="viewOption[3] !== 24" class="specs-table" :span="viewOption[3]">
            <el-row
                class="spec"
                v-for="(value, name, index) in product.specs"
                :key="index"
            >
                <el-col :span="14">
                    {{ name }}
                </el-col>
                <el-col :span="10">
                    {{ value }}
                </el-col>
            </el-row>
        </el-col>
        <span class="instock">
            <i class="el-icon-success"></i>
            in stock
        </span>
        <div class="actions">
            <button class="action-btn">
                <img :src="mailIcon" alt="mail icon" />
            </button>
            <button class="action-btn">
                <img :src="statisticIcon" alt="statistic icon" />
            </button>
            <button class="action-btn">
                <img :src="heartIcon" alt="heart icon" />
            </button>
        </div>
    </el-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StarRating from 'vue-star-rating';
import { filterModule } from '../../store/filterStore';
import { IProduct } from '../../types';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },
    components: {
        StarRating,
    },
    data() {
        return {
            cartIcon: require('@/assets/images/catalog/icon/cart-icon.svg'),
            mailIcon: require('@/assets/images/catalog/icon/mail-icon.svg'),
            statisticIcon: require('@/assets/images/catalog/icon/statistic-icon.svg'),
            heartIcon: require('@/assets/images/catalog/icon/heart-icon.svg'),
        };
    },
    computed: {
        viewOption() {
            return filterModule.getViewOption;
        },
        discountPrice(): number {
            return this.product.price - this.product.price * this.product.discount;
        },
        imageUrl(): string {
            return require(`@/assets/images/catalog/${this.product.img[0]}.png`);
        },
    },
});
</script>

<style lang="scss" scoped>
.product-card {
    position: relative;
    padding: 30px 53px 36px;
    min-height: 330px;
    .card-img {
        display: block;
        margin: 9px 53px 21px 0;
        max-width: 250px;
        aspect-ratio: 1;
    }
    .reviews {
        color: #a2a6b0;
        font-size: 12px;
        font-family: inherit;
    }
    .product-card-body {
        margin-top: 60px;
        .code {
            margin: 0;
            font-size: 12px;
        }
        .description {
            margin-top: 21.5px;
        }
        .basic-price {
            font-weight: 400;
            text-decoration-line: line-through;
        }
        .discount-price {
            margin-left: 8px;
            font-size: 18px;
        }
        .app-btn.add-to-cart {
            display: block;
            margin-top: 47.5px;
        }
    }
    .card-image {
        width: 250px;
        height: 250px;
    }
    .specs-table {
        margin-top: 94px;
        margin-left: 45px;
    }
    .spec {
        padding: 6px 15px;
        width: 235px;
        height: 30px;
    }
    .spec:nth-child(2n) {
        background-color: #f5f7ff;
    }
    .instock {
        position: absolute;
        top: 21px;
        right: 30px;
        color: #78a962;
        cursor: default;
        font-size: 10px;
    }
    .actions {
        position: absolute;
        bottom: 36px;
        right: 30px;
        .action-btn {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            background-color: #fff;
            border: 2px solid #a2a6b0;
            border-radius: 50%;
        }
        .action-btn ~ .action-btn {
            margin-left: 6px;
        }
    }
}
.product-card:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
}
</style>
