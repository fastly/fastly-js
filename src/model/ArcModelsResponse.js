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
import ArcModelsMeta from './ArcModelsMeta';

/**
 * The ArcModelsResponse model module.
 * @module model/ArcModelsResponse
 * @version 17.0.0
 */
class ArcModelsResponse {
    /**
     * Constructs a new <code>ArcModelsResponse</code>.
     * @alias module:model/ArcModelsResponse
     * @param data {Array.<module:model/ArcModel>} The models returned by the request.
     * @param meta {module:model/ArcModelsMeta} 
     */
    constructor(data, meta) { 
        
        ArcModelsResponse.initialize(this, data, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, meta) { 
        obj['data'] = data;
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>ArcModelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcModelsResponse} obj Optional instance to populate.
     * @return {module:model/ArcModelsResponse} The populated <code>ArcModelsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcModelsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ArcModel]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ArcModelsMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * The models returned by the request.
 * @member {Array.<module:model/ArcModel>} data
 */
ArcModelsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ArcModelsMeta} meta
 */
ArcModelsResponse.prototype['meta'] = undefined;






export default ArcModelsResponse;

