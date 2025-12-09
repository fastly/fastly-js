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
 * The TlsConfigurationResponseAttributesAllOf model module.
 * @module model/TlsConfigurationResponseAttributesAllOf
 * @version 14.1.0
 */
class TlsConfigurationResponseAttributesAllOf {
    /**
     * Constructs a new <code>TlsConfigurationResponseAttributesAllOf</code>.
     * @alias module:model/TlsConfigurationResponseAttributesAllOf
     */
    constructor() { 
        
        TlsConfigurationResponseAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsConfigurationResponseAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationResponseAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationResponseAttributesAllOf} The populated <code>TlsConfigurationResponseAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsConfigurationResponseAttributesAllOf();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('http_protocols')) {
                obj['http_protocols'] = ApiClient.convertToType(data['http_protocols'], ['String']);
            }
            if (data.hasOwnProperty('tls_protocols')) {
                obj['tls_protocols'] = ApiClient.convertToType(data['tls_protocols'], ['String']);
            }
            if (data.hasOwnProperty('bulk')) {
                obj['bulk'] = ApiClient.convertToType(data['bulk'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Signifies whether or not Fastly will use this configuration as a default when creating a new [TLS Activation](https://www.fastly.com/documentation/reference/api/tls/custom-certs/activations/).
 * @member {Boolean} default
 */
TlsConfigurationResponseAttributesAllOf.prototype['default'] = undefined;

/**
 * HTTP protocols available on your configuration.
 * @member {Array.<String>} http_protocols
 */
TlsConfigurationResponseAttributesAllOf.prototype['http_protocols'] = undefined;

/**
 * TLS protocols available on your configuration.
 * @member {Array.<String>} tls_protocols
 */
TlsConfigurationResponseAttributesAllOf.prototype['tls_protocols'] = undefined;

/**
 * Signifies whether the configuration is used for Platform TLS or not.
 * @member {Boolean} bulk
 */
TlsConfigurationResponseAttributesAllOf.prototype['bulk'] = undefined;






export default TlsConfigurationResponseAttributesAllOf;

