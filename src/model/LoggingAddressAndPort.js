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
 * The LoggingAddressAndPort model module.
 * @module model/LoggingAddressAndPort
 * @version 3.3.1
 */
class LoggingAddressAndPort {
    /**
     * Constructs a new <code>LoggingAddressAndPort</code>.
     * @alias module:model/LoggingAddressAndPort
     */
    constructor() { 
        
        LoggingAddressAndPort.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingAddressAndPort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingAddressAndPort} obj Optional instance to populate.
     * @return {module:model/LoggingAddressAndPort} The populated <code>LoggingAddressAndPort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingAddressAndPort();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingAddressAndPort.prototype['address'] = undefined;

/**
 * The port number.
 * @member {Number} port
 * @default 514
 */
LoggingAddressAndPort.prototype['port'] = 514;






export default LoggingAddressAndPort;

