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
import Timestamps from './Timestamps';
import TlsConfigurationResponseAttributesAllOf from './TlsConfigurationResponseAttributesAllOf';

/**
 * The TlsConfigurationResponseAttributes model module.
 * @module model/TlsConfigurationResponseAttributes
 * @version 7.5.0
 */
class TlsConfigurationResponseAttributes {
    /**
     * Constructs a new <code>TlsConfigurationResponseAttributes</code>.
     * @alias module:model/TlsConfigurationResponseAttributes
     * @implements module:model/Timestamps
     * @implements module:model/TlsConfigurationResponseAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);TlsConfigurationResponseAttributesAllOf.initialize(this);
        TlsConfigurationResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsConfigurationResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationResponseAttributes} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationResponseAttributes} The populated <code>TlsConfigurationResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsConfigurationResponseAttributes();
            Timestamps.constructFromObject(data, obj);
            TlsConfigurationResponseAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TlsConfigurationResponseAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TlsConfigurationResponseAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TlsConfigurationResponseAttributes.prototype['updated_at'] = undefined;

/**
 * Signifies whether or not Fastly will use this configuration as a default when creating a new [TLS Activation](https://www.fastly.com/documentation/reference/api/tls/custom-certs/activations/).
 * @member {Boolean} default
 */
TlsConfigurationResponseAttributes.prototype['default'] = undefined;

/**
 * HTTP protocols available on your configuration.
 * @member {Array.<String>} http_protocols
 */
TlsConfigurationResponseAttributes.prototype['http_protocols'] = undefined;

/**
 * TLS protocols available on your configuration.
 * @member {Array.<String>} tls_protocols
 */
TlsConfigurationResponseAttributes.prototype['tls_protocols'] = undefined;

/**
 * Signifies whether the configuration is used for Platform TLS or not.
 * @member {Boolean} bulk
 */
TlsConfigurationResponseAttributes.prototype['bulk'] = undefined;


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
// Implement TlsConfigurationResponseAttributesAllOf interface:
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




export default TlsConfigurationResponseAttributes;

