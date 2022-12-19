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
import RelationshipsForTlsCsr from './RelationshipsForTlsCsr';
import TlsCsrResponseAttributes from './TlsCsrResponseAttributes';
import TypeTlsCsr from './TypeTlsCsr';

/**
 * The TlsCsrResponseData model module.
 * @module model/TlsCsrResponseData
 * @version 3.0.1-alpha.1
 */
class TlsCsrResponseData {
    /**
     * Constructs a new <code>TlsCsrResponseData</code>.
     * @alias module:model/TlsCsrResponseData
     */
    constructor() { 
        
        TlsCsrResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCsrResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCsrResponseData} obj Optional instance to populate.
     * @return {module:model/TlsCsrResponseData} The populated <code>TlsCsrResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCsrResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsCsr.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsCsrResponseAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsCsr.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TlsCsrResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/TypeTlsCsr} type
 */
TlsCsrResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/TlsCsrResponseAttributes} attributes
 */
TlsCsrResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsCsr} relationships
 */
TlsCsrResponseData.prototype['relationships'] = undefined;






export default TlsCsrResponseData;

