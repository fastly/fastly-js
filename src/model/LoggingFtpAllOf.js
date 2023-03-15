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
 * The LoggingFtpAllOf model module.
 * @module model/LoggingFtpAllOf
 * @version 3.1.1
 */
class LoggingFtpAllOf {
    /**
     * Constructs a new <code>LoggingFtpAllOf</code>.
     * @alias module:model/LoggingFtpAllOf
     */
    constructor() { 
        
        LoggingFtpAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingFtpAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingFtpAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingFtpAllOf} The populated <code>LoggingFtpAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingFtpAllOf();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ipv4')) {
                obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An hostname or IPv4 address.
 * @member {String} address
 */
LoggingFtpAllOf.prototype['address'] = undefined;

/**
 * Hostname used.
 * @member {String} hostname
 */
LoggingFtpAllOf.prototype['hostname'] = undefined;

/**
 * IPv4 address of the host.
 * @member {String} ipv4
 */
LoggingFtpAllOf.prototype['ipv4'] = undefined;

/**
 * The password for the server. For anonymous use an email address.
 * @member {String} password
 */
LoggingFtpAllOf.prototype['password'] = undefined;

/**
 * The path to upload log files to. If the path ends in `/` then it is treated as a directory.
 * @member {String} path
 */
LoggingFtpAllOf.prototype['path'] = undefined;

/**
 * The port number.
 * @member {Number} port
 * @default 21
 */
LoggingFtpAllOf.prototype['port'] = 21;

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingFtpAllOf.prototype['public_key'] = 'null';

/**
 * The username for the server. Can be anonymous.
 * @member {String} user
 */
LoggingFtpAllOf.prototype['user'] = undefined;






export default LoggingFtpAllOf;

