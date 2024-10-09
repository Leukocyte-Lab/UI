import type { Meta, StoryObj } from '@storybook/vue3';
import SearchBar from './SearchBar.vue';
import type { SearchBar as SearchBarNS } from './SearchBar.model';
type GenericMeta<C> = Omit<Meta<C>, 'component'> & {
    component: Record<keyof C, unknown>;
};
declare const meta: GenericMeta<typeof SearchBar<SearchBarNS.AcceptableValue>>;
export default meta;
type SearchBar$ = StoryObj<typeof SearchBar>;
export declare const DefaultSearchBar: SearchBar$;
export declare const DefaultSearchBarWithAutoComplete: SearchBar$;
export declare const DisabledSearchBar: SearchBar$;
