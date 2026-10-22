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
 * The ArcModel model module.
 * @module model/ArcModel
 * @version 17.0.0
 */
class ArcModel {
    /**
     * Constructs a new <code>ArcModel</code>.
     * An AI model available through AI Runtime Control.
     * @alias module:model/ArcModel
     * @param id {String} The model identifier.
     * @param display_name {String} The human-readable name of the model.
     * @param provider_id {String} The ID of the provider this model belongs to.
     */
    constructor(id, display_name, provider_id) { 
        
        ArcModel.initialize(this, id, display_name, provider_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, display_name, provider_id) { 
        obj['id'] = id;
        obj['display_name'] = display_name;
        obj['provider_id'] = provider_id;
    }

    /**
     * Constructs a <code>ArcModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcModel} obj Optional instance to populate.
     * @return {module:model/ArcModel} The populated <code>ArcModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The model identifier.
 * @member {String} id
 */
ArcModel.prototype['id'] = undefined;

/**
 * The human-readable name of the model.
 * @member {String} display_name
 */
ArcModel.prototype['display_name'] = undefined;

/**
 * The ID of the provider this model belongs to.
 * @member {String} provider_id
 */
ArcModel.prototype['provider_id'] = undefined;






export default ArcModel;

