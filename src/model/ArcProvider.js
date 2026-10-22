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
import ArcModel from './ArcModel';

/**
 * The ArcProvider model module.
 * @module model/ArcProvider
 * @version 17.0.0
 */
class ArcProvider {
    /**
     * Constructs a new <code>ArcProvider</code>.
     * An AI provider supported by AI Runtime Control.
     * @alias module:model/ArcProvider
     * @param id {String} The provider identifier.
     * @param display_name {String} The human-readable name of the provider.
     * @param default_base_url {String} The default API base URL for the provider.
     * @param models {Array.<module:model/ArcModel>} The models available from this provider.
     */
    constructor(id, display_name, default_base_url, models) { 
        
        ArcProvider.initialize(this, id, display_name, default_base_url, models);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, display_name, default_base_url, models) { 
        obj['id'] = id;
        obj['display_name'] = display_name;
        obj['default_base_url'] = default_base_url;
        obj['models'] = models;
    }

    /**
     * Constructs a <code>ArcProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcProvider} obj Optional instance to populate.
     * @return {module:model/ArcProvider} The populated <code>ArcProvider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcProvider();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('default_base_url')) {
                obj['default_base_url'] = ApiClient.convertToType(data['default_base_url'], 'String');
            }
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], [ArcModel]);
            }
        }
        return obj;
    }


}

/**
 * The provider identifier.
 * @member {String} id
 */
ArcProvider.prototype['id'] = undefined;

/**
 * The human-readable name of the provider.
 * @member {String} display_name
 */
ArcProvider.prototype['display_name'] = undefined;

/**
 * The default API base URL for the provider.
 * @member {String} default_base_url
 */
ArcProvider.prototype['default_base_url'] = undefined;

/**
 * The models available from this provider.
 * @member {Array.<module:model/ArcModel>} models
 */
ArcProvider.prototype['models'] = undefined;






export default ArcProvider;

