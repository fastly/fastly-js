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

/**
 * The LoggingSumologicAdditional model module.
 * @module model/LoggingSumologicAdditional
 * @version 10.0.0
 */
class LoggingSumologicAdditional {
    /**
     * Constructs a new <code>LoggingSumologicAdditional</code>.
     * @alias module:model/LoggingSumologicAdditional
     */
    constructor() { 
        
        LoggingSumologicAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingSumologicAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSumologicAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingSumologicAdditional} The populated <code>LoggingSumologicAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingSumologicAdditional();

            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = LoggingMessageType.constructFromObject(data['message_type']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingSumologicAdditional.prototype['message_type'] = undefined;

/**
 * The URL to post logs to.
 * @member {String} url
 */
LoggingSumologicAdditional.prototype['url'] = undefined;






export default LoggingSumologicAdditional;

