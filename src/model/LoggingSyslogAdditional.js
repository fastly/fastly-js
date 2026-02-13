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
import LoggingMessageType from './LoggingMessageType';
import LoggingUseTlsString from './LoggingUseTlsString';

/**
 * The LoggingSyslogAdditional model module.
 * @module model/LoggingSyslogAdditional
 * @version 15.0.0-beta.2
 */
class LoggingSyslogAdditional {
    /**
     * Constructs a new <code>LoggingSyslogAdditional</code>.
     * @alias module:model/LoggingSyslogAdditional
     */
    constructor() { 
        
        LoggingSyslogAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingSyslogAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSyslogAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingSyslogAdditional} The populated <code>LoggingSyslogAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingSyslogAdditional();

            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = LoggingMessageType.constructFromObject(data['message_type']);
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ipv4')) {
                obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTlsString.constructFromObject(data['use_tls']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingSyslogAdditional.prototype['message_type'] = undefined;

/**
 * The hostname used for the syslog endpoint.
 * @member {String} hostname
 */
LoggingSyslogAdditional.prototype['hostname'] = undefined;

/**
 * The IPv4 address used for the syslog endpoint.
 * @member {String} ipv4
 */
LoggingSyslogAdditional.prototype['ipv4'] = undefined;

/**
 * Whether to prepend each message with a specific token.
 * @member {String} token
 * @default 'null'
 */
LoggingSyslogAdditional.prototype['token'] = 'null';

/**
 * @member {module:model/LoggingUseTlsString} use_tls
 */
LoggingSyslogAdditional.prototype['use_tls'] = undefined;






export default LoggingSyslogAdditional;

