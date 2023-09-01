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
 * The LoggingCommonResponseAllOf1 model module.
 * @module model/LoggingCommonResponseAllOf1
 * @version 6.1.0
 */
class LoggingCommonResponseAllOf1 {
    /**
     * Constructs a new <code>LoggingCommonResponseAllOf1</code>.
     * @alias module:model/LoggingCommonResponseAllOf1
     */
    constructor() { 
        
        LoggingCommonResponseAllOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingCommonResponseAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCommonResponseAllOf1} obj Optional instance to populate.
     * @return {module:model/LoggingCommonResponseAllOf1} The populated <code>LoggingCommonResponseAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingCommonResponseAllOf1();

            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommonResponseAllOf1.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingCommonResponseAllOf1.prototype['format_version'] = undefined;





/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCommonResponseAllOf1['FormatVersionEnum'] = {

    /**
     * value: "1"
     * @const
     */
    "v1": "1",

    /**
     * value: "2"
     * @const
     */
    "v2": "2"
};



export default LoggingCommonResponseAllOf1;

