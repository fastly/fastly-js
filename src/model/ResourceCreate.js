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
import Resource from './Resource';
import ResourceCreateAllOf from './ResourceCreateAllOf';

/**
 * The ResourceCreate model module.
 * @module model/ResourceCreate
 * @version 3.0.0-beta3
 */
class ResourceCreate {
    /**
     * Constructs a new <code>ResourceCreate</code>.
     * @alias module:model/ResourceCreate
     * @implements module:model/Resource
     * @implements module:model/ResourceCreateAllOf
     */
    constructor() { 
        Resource.initialize(this);ResourceCreateAllOf.initialize(this);
        ResourceCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceCreate} obj Optional instance to populate.
     * @return {module:model/ResourceCreate} The populated <code>ResourceCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceCreate();
            Resource.constructFromObject(data, obj);
            ResourceCreateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_id')) {
                obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the resource.
 * @member {String} name
 */
ResourceCreate.prototype['name'] = undefined;

/**
 * The ID of the linked resource.
 * @member {String} resource_id
 */
ResourceCreate.prototype['resource_id'] = undefined;


// Implement Resource interface:
/**
 * The name of the resource.
 * @member {String} name
 */
Resource.prototype['name'] = undefined;
// Implement ResourceCreateAllOf interface:
/**
 * The ID of the linked resource.
 * @member {String} resource_id
 */
ResourceCreateAllOf.prototype['resource_id'] = undefined;




export default ResourceCreate;

