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
import TypeResource from './TypeResource';

/**
 * The ResourceResponseAllOf model module.
 * @module model/ResourceResponseAllOf
 * @version 15.0.0
 */
class ResourceResponseAllOf {
    /**
     * Constructs a new <code>ResourceResponseAllOf</code>.
     * @alias module:model/ResourceResponseAllOf
     */
    constructor() { 
        
        ResourceResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ResourceResponseAllOf} The populated <code>ResourceResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceResponseAllOf();

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






export default ResourceResponseAllOf;

