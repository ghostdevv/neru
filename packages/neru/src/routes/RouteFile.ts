import type { RouteDir } from './RouteDir';
import { stripExt } from 'ghoststools';

export class RouteFile {
    public readonly routePath: string;
    public readonly filePath: string;
    public readonly routesDir: RouteDir;

    constructor(filePath: string, routesDir: RouteDir) {
        this.filePath = filePath;
        this.routesDir = routesDir;

        this.routePath = stripExt(
            this.filePath.replace(this.routesDir.path, ''),
        );
    }
}
