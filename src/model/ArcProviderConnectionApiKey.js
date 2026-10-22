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
 * The ArcProviderConnectionApiKey model module.
 * @module model/ArcProviderConnectionApiKey
 * @version 17.0.0
 */
class ArcProviderConnectionApiKey {
    /**
     * Constructs a new <code>ArcProviderConnectionApiKey</code>.
     * A provider connection authenticated with the provider&#39;s own API key.
     * @alias module:model/ArcProviderConnectionApiKey
     * @param name {String} A display name for the provider connection. Cannot match a name reserved by a built-in provider.
     * @param models {Array.<String>} The AI model identifiers this connection is allowed to use.
     * @param base_url {String} The base URL of the provider's API. Must be an absolute `http` or `https` URL and must not end in `/v1`.
     * @param api_key {String} The provider's secret API key.
     */
    constructor(name, models, base_url, api_key) { 
        
        ArcProviderConnectionApiKey.initialize(this, name, models, base_url, api_key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, models, base_url, api_key) { 
        obj['name'] = name;
        obj['models'] = models;
        obj['base_url'] = base_url;
        obj['api_key'] = api_key;
    }

    /**
     * Constructs a <code>ArcProviderConnectionApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcProviderConnectionApiKey} obj Optional instance to populate.
     * @return {module:model/ArcProviderConnectionApiKey} The populated <code>ArcProviderConnectionApiKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcProviderConnectionApiKey();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['String']);
            }
            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A display name for the provider connection. Cannot match a name reserved by a built-in provider.
 * @member {String} name
 */
ArcProviderConnectionApiKey.prototype['name'] = undefined;

/**
 * The AI model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionApiKey.prototype['models'] = undefined;

/**
 * The base URL of the provider's API. Must be an absolute `http` or `https` URL and must not end in `/v1`.
 * @member {String} base_url
 */
ArcProviderConnectionApiKey.prototype['base_url'] = undefined;

/**
 * The provider's secret API key.
 * @member {String} api_key
 */
ArcProviderConnectionApiKey.prototype['api_key'] = undefined;

/**
 * The authentication type for this connection. Omit for the default `api-key` behavior.
 * @member {module:model/ArcProviderConnectionApiKey.AuthTypeEnum} auth_type
 * @default 'api-key'
 */
ArcProviderConnectionApiKey.prototype['auth_type'] = undefined;





/**
 * Allowed values for the <code>auth_type</code> property.
 * @enum {String}
 * @readonly
 */
ArcProviderConnectionApiKey['AuthTypeEnum'] = {

    /**
     * value: "api-key"
     * @const
     */
    "api-key": "api-key"
};



export default ArcProviderConnectionApiKey;

