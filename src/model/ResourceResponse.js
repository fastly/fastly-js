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
import Resource from './Resource';
import ResourceResponseAllOf from './ResourceResponseAllOf';
import Timestamps from './Timestamps';
import TypeResource from './TypeResource';

/**
 * The ResourceResponse model module.
 * @module model/ResourceResponse
 * @version 15.0.0-beta.0
 */
class ResourceResponse {
    /**
     * Constructs a new <code>ResourceResponse</code>.
     * @alias module:model/ResourceResponse
     * @implements module:model/Resource
     * @implements module:model/Timestamps
     * @implements module:model/ResourceResponseAllOf
     */
    constructor() { 
        Resource.initialize(this);Timestamps.initialize(this);ResourceResponseAllOf.initialize(this);
        ResourceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceResponse} obj Optional instance to populate.
     * @return {module:model/ResourceResponse} The populated <code>ResourceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceResponse();
            Resource.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ResourceResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('resource_id')) {
                obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = TypeResource.constructFromObject(data['resource_type']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the underlying linked resource.
 * @member {String} resource_id
 */
ResourceResponse.prototype['resource_id'] = undefined;

/**
 * The name of the resource link. Note this is separate from the resource store name and might not match the store name.
 * @member {String} name
 */
ResourceResponse.prototype['name'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ResourceResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ResourceResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ResourceResponse.prototype['updated_at'] = undefined;

/**
 * An alphanumeric string identifying the resource link.
 * @member {String} id
 */
ResourceResponse.prototype['id'] = undefined;

/**
 * The path to the resource.
 * @member {String} href
 */
ResourceResponse.prototype['href'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
ResourceResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
ResourceResponse.prototype['version'] = undefined;

/**
 * @member {module:model/TypeResource} resource_type
 */
ResourceResponse.prototype['resource_type'] = undefined;


// Implement Resource interface:
/**
 * The ID of the underlying linked resource.
 * @member {String} resource_id
 */
Resource.prototype['resource_id'] = undefined;
/**
 * The name of the resource link. Note this is separate from the resource store name and might not match the store name.
 * @member {String} name
 */
Resource.prototype['name'] = undefined;
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
// Implement ResourceResponseAllOf interface:
/**
 * An alphanumeric string identifying the resource link.
 * @member {String} id
 */
ResourceResponseAllOf.prototype['id'] = undefined;
/**
 * The path to the resource.
 * @member {String} href
 */
ResourceResponseAllOf.prototype['href'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
ResourceResponseAllOf.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */
ResourceResponseAllOf.prototype['version'] = undefined;
/**
 * @member {module:model/TypeResource} resource_type
 */
ResourceResponseAllOf.prototype['resource_type'] = undefined;




export default ResourceResponse;

