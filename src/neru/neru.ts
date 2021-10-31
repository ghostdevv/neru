import { validateAdapter } from '../adapters/adapter';
import type { NeruOptions } from './options';

export const neru = <AdapterType>({
    adapter,
    server,
    ...options
}: NeruOptions<AdapterType>) => {
    const { error } = validateAdapter(adapter);

    if (error) {
        console.error(error.annotate());

        throw new Error(
            'Invalid adapter, please contact the author with the above error',
        );
    }
};
