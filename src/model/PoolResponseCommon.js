/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
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
 * The PoolResponseCommon model module.
 * @module model/PoolResponseCommon
 * @version 10.0.0
 */
class PoolResponseCommon {
    /**
     * Constructs a new <code>PoolResponseCommon</code>.
     * @alias module:model/PoolResponseCommon
     */
    constructor() { 
        
        PoolResponseCommon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoolResponseCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolResponseCommon} obj Optional instance to populate.
     * @return {module:model/PoolResponseCommon} The populated <code>PoolResponseCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolResponseCommon();

            if (data.hasOwnProperty('between_bytes_timeout')) {
                obj['between_bytes_timeout'] = ApiClient.convertToType(data['between_bytes_timeout'], 'String');
            }
            if (data.hasOwnProperty('connect_timeout')) {
                obj['connect_timeout'] = ApiClient.convertToType(data['connect_timeout'], 'String');
            }
            if (data.hasOwnProperty('first_byte_timeout')) {
                obj['first_byte_timeout'] = ApiClient.convertToType(data['first_byte_timeout'], 'String');
            }
            if (data.hasOwnProperty('max_conn_default')) {
                obj['max_conn_default'] = ApiClient.convertToType(data['max_conn_default'], 'String');
            }
            if (data.hasOwnProperty('tls_check_cert')) {
                obj['tls_check_cert'] = ApiClient.convertToType(data['tls_check_cert'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
 * @member {String} between_bytes_timeout
 */
PoolResponseCommon.prototype['between_bytes_timeout'] = undefined;

/**
 * How long to wait for a timeout in milliseconds.
 * @member {String} connect_timeout
 */
PoolResponseCommon.prototype['connect_timeout'] = undefined;

/**
 * How long to wait for the first byte in milliseconds.
 * @member {String} first_byte_timeout
 */
PoolResponseCommon.prototype['first_byte_timeout'] = undefined;

/**
 * Maximum number of connections.
 * @member {String} max_conn_default
 * @default '200'
 */
PoolResponseCommon.prototype['max_conn_default'] = '200';

/**
 * Be strict on checking TLS certs.
 * @member {String} tls_check_cert
 */
PoolResponseCommon.prototype['tls_check_cert'] = undefined;

/**
 * @member {String} id
 */
PoolResponseCommon.prototype['id'] = undefined;






export default PoolResponseCommon;

