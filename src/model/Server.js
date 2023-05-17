/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Server model module.
 * @module model/Server
 * @version 4.1.0
 */
class Server {
    /**
     * Constructs a new <code>Server</code>.
     * @alias module:model/Server
     */
    constructor() { 
        
        Server.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Server} obj Optional instance to populate.
     * @return {module:model/Server} The populated <code>Server</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Server();

            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('max_conn')) {
                obj['max_conn'] = ApiClient.convertToType(data['max_conn'], 'Number');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('override_host')) {
                obj['override_host'] = ApiClient.convertToType(data['override_host'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Weight (`1-100`) used to load balance this server against others.
 * @member {Number} weight
 * @default 100
 */
Server.prototype['weight'] = 100;

/**
 * Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
 * @member {Number} max_conn
 * @default 0
 */
Server.prototype['max_conn'] = 0;

/**
 * Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
 * @member {Number} port
 * @default 80
 */
Server.prototype['port'] = 80;

/**
 * A hostname, IPv4, or IPv6 address for the server. Required.
 * @member {String} address
 */
Server.prototype['address'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Server.prototype['comment'] = undefined;

/**
 * Allows servers to be enabled and disabled in a pool.
 * @member {Boolean} disabled
 * @default false
 */
Server.prototype['disabled'] = false;

/**
 * The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
Server.prototype['override_host'] = 'null';






export default Server;

