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
 * The TlsCommonResponseAllOf1 model module.
 * @module model/TlsCommonResponseAllOf1
 * @version 12.1.0
 */
class TlsCommonResponseAllOf1 {
    /**
     * Constructs a new <code>TlsCommonResponseAllOf1</code>.
     * @alias module:model/TlsCommonResponseAllOf1
     */
    constructor() { 
        
        TlsCommonResponseAllOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCommonResponseAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCommonResponseAllOf1} obj Optional instance to populate.
     * @return {module:model/TlsCommonResponseAllOf1} The populated <code>TlsCommonResponseAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCommonResponseAllOf1();

            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether to use TLS.
 * @member {module:model/TlsCommonResponseAllOf1.UseTlsEnum} use_tls
 * @default '0'
 */
TlsCommonResponseAllOf1.prototype['use_tls'] = undefined;





/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {String}
 * @readonly
 */
TlsCommonResponseAllOf1['UseTlsEnum'] = {

    /**
     * value: "0"
     * @const
     */
    "no_tls": "0",

    /**
     * value: "1"
     * @const
     */
    "use_tls": "1"
};



export default TlsCommonResponseAllOf1;

