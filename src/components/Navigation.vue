<template>
  <nav id="navigation">
    <Logo />
    <SearchBar />
    <SearchFilters />
    <UserWidget />
  </nav>
</template>

<script>
  import Logo from '@/components/Logo';
  import SearchBar from '@/components/SearchBar';
  import SearchFilters from '@/components/SearchFilters';
  import UserWidget from '@/components/UserWidget';

  export default {
    name: 'Navigation',
    components: { UserWidget, SearchFilters, SearchBar, Logo }
  };
</script>

<style lang="scss">
  #logo{
    grid-area: logo;
  }
  #search-bar{
    grid-area: search;
  }
  #search-filters{
    grid-area: filters;
  }
  #user-widget{
    grid-area: user;
    justify-self: end;
  }

  #navigation {
    padding: 52px 24px 32px;
    display: grid;
    gap: 24px;

    background-color: #fff;
    align-items: center;

    grid-template-columns: auto max-content;
    grid-template-areas:
        "logo user"
        "search search"
        "filters filters";

    @media (min-width: $l){
      height: 144px;
      padding: 0 90px;
      grid-template-columns: max-content 398px auto max-content;
      grid-template-areas: "logo search filters user";
    };

    @media (min-width: $xl){
      grid-template-columns: max-content 50px 398px auto max-content;
      grid-template-areas: "logo . search filters user";
    };
  }



</style>
