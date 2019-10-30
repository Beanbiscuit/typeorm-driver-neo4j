/**
 * Neo4j server specific configurations.
 *
 * @see https://github.com/neo4j/neo4j-javascript-driver
 */
export interface Neo4jConnectionCredentialsOptions {

    /**
     * Connection url where perform connection to.
     */
    readonly url?: string;

    /**
     * Neo4j server host.
     */
    readonly host?: string;

    /**
     * Neo4j server host port.
     */
    readonly port?: number;

    /**
     * Neo4j server username.
     */
    readonly username?: string;

    /**
     * Neo4j server password.
     */
    readonly password?: string;

    /**
     *
     */
    readonly NEO4J_ENCRYPTED?: string;
}