import { stripExt } from 'ghoststools';

export class RouteFile {
    public readonly route: string;
    public readonly filePath: string;
    public readonly routesDir: string;

    constructor(filePath: string, routesDir: string) {
        this.filePath = filePath;
        this.routesDir = routesDir;

        this.route = stripExt(this.filePath.replace(this.routesDir, ''));
    }
}
