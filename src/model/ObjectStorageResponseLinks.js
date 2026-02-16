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
import ObjectStorageResponseLinksLinks from './ObjectStorageResponseLinksLinks';

/**
 * The ObjectStorageResponseLinks model module.
 * @module model/ObjectStorageResponseLinks
 * @version 15.0.0
 */
class ObjectStorageResponseLinks {
    /**
     * Constructs a new <code>ObjectStorageResponseLinks</code>.
     * @alias module:model/ObjectStorageResponseLinks
     */
    constructor() { 
        
        ObjectStorageResponseLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectStorageResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectStorageResponseLinks} obj Optional instance to populate.
     * @return {module:model/ObjectStorageResponseLinks} The populated <code>ObjectStorageResponseLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectStorageResponseLinks();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ObjectStorageResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ObjectStorageResponseLinksLinks} _links
 */
ObjectStorageResponseLinks.prototype['_links'] = undefined;






export default ObjectStorageResponseLinks;

