import type { NeruOptions } from './options';

import { Adapter } from '../adapters/Adapter';

export const neru = <AdapterType extends Adapter<unknown>>({
    adapter,
    server,
    ...options
}: NeruOptions<AdapterType>) => {
    // const layer = new adapter()
};

interface adapter<AdapterType extends InstanceType<typeof Adapter>> {
    create: () => AdapterType;
}
