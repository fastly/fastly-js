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
import Server from './Server';
import ServerResponseAllOf from './ServerResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The ServerResponse model module.
 * @module model/ServerResponse
 * @version 3.0.1-alpha.1
 */
class ServerResponse {
    /**
     * Constructs a new <code>ServerResponse</code>.
     * @alias module:model/ServerResponse
     * @implements module:model/Server
     * @implements module:model/Timestamps
     * @implements module:model/ServerResponseAllOf
     */
    constructor() { 
        Server.initialize(this);Timestamps.initialize(this);ServerResponseAllOf.initialize(this);
        ServerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerResponse} obj Optional instance to populate.
     * @return {module:model/ServerResponse} The populated <code>ServerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerResponse();
            Server.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServerResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = ApiClient.convertToType(data['pool_id'], 'String');
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
ServerResponse.prototype['weight'] = 100;

/**
 * Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
 * @member {Number} max_conn
 * @default 0
 */
ServerResponse.prototype['max_conn'] = 0;

/**
 * Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
 * @member {Number} port
 * @default 80
 */
ServerResponse.prototype['port'] = 80;

/**
 * A hostname, IPv4, or IPv6 address for the server. Required.
 * @member {String} address
 */
ServerResponse.prototype['address'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
ServerResponse.prototype['comment'] = undefined;

/**
 * Allows servers to be enabled and disabled in a pool.
 * @member {Boolean} disabled
 * @default false
 */
ServerResponse.prototype['disabled'] = false;

/**
 * The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
ServerResponse.prototype['override_host'] = 'null';

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ServerResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ServerResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ServerResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
ServerResponse.prototype['service_id'] = undefined;

/**
 * @member {String} id
 */
ServerResponse.prototype['id'] = undefined;

/**
 * @member {String} pool_id
 */
ServerResponse.prototype['pool_id'] = undefined;


// Implement Server interface:
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
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServerResponseAllOf interface:
/**
 * @member {String} service_id
 */
ServerResponseAllOf.prototype['service_id'] = undefined;
/**
 * @member {String} id
 */
ServerResponseAllOf.prototype['id'] = undefined;
/**
 * @member {String} pool_id
 */
ServerResponseAllOf.prototype['pool_id'] = undefined;




export default ServerResponse;

