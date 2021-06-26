import { shallowMount, createLocalVue } from '@vue/test-utils';
import products from '@/store/modules/products';
import Vuex from 'vuex';
import Navigation from '@/components/Navigation';
import Paginator from '@/components/Paginator';
import Products from '@/views/products/Products.vue';
import ProductItem from '@/components/ProductItem';

const localVue = createLocalVue();
localVue.use(Vuex);

const fetchProducts = jest.fn();

let store = new Vuex.Store({
  modules: {
    products: {
      ...products,
      actions: {
        fetchProducts
      },
      state: {
        items: [
          {
            'id': 4,
            'name': 'Refined Rubber Chicken',
            'description': 'Tempore deserunt voluptatibus.',
            'rating': 2,
            'image': 'https://picsum.photos/640/480?random=3010',
            'promo': true,
            'active': false
          },
          {
            'id': 6,
            'name': 'Sleek Soft Fish',
            'description': 'Deserunt provident nulla eum atque.',
            'rating': 5,
            'image': 'https://picsum.photos/640/480?random=4054',
            'promo': true,
            'active': true
          }
        ],
        pagination:
          {
            'totalPages': 63,
            'currentPage': 1
          }
      }
    }
  }
});

let emptyStore = new Vuex.Store({
  modules: {
    products: {
      ...products,
      actions: {
        fetchProducts
      },
      state: {
        items: [],
        pagination:
          {
            'totalPages': 0,
            'currentPage': 0
          }
      }
    }
  }
});

describe('Products view', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Products, {
      localVue,
      store
    });

    expect(wrapper.findComponent(Navigation).exists()).toBeTruthy();
    expect(wrapper.findComponent(Paginator).exists()).toBeTruthy();
    expect(wrapper.findAllComponents(ProductItem).length).toBe(2);
  });

  it('shows empty information', () => {
    const wrapper = shallowMount(Products, {
      localVue,
      store: emptyStore
    });

    expect(wrapper.findComponent(Navigation).exists()).toBeTruthy();
    expect(wrapper.findComponent(Paginator).exists()).toBeFalsy();
    expect(wrapper.findAllComponents(ProductItem).length).toBe(0);

    expect(wrapper.html()).toContain('There are no products on the list');
  });

  it('fetch products on create', () => {
    const wrapper = shallowMount(Products, {
      localVue,
      store
    });

    expect(fetchProducts).toBeCalled();
  });
});
