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
import RelationshipsForTlsDomain from './RelationshipsForTlsDomain';
import TypeTlsDomain from './TypeTlsDomain';

/**
 * The TlsDomainData model module.
 * @module model/TlsDomainData
 * @version 10.0.0
 */
class TlsDomainData {
    /**
     * Constructs a new <code>TlsDomainData</code>.
     * @alias module:model/TlsDomainData
     */
    constructor() { 
        
        TlsDomainData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsDomainData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsDomainData} obj Optional instance to populate.
     * @return {module:model/TlsDomainData} The populated <code>TlsDomainData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsDomainData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsDomain.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsDomain.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * The domain name.
 * @member {String} id
 */
TlsDomainData.prototype['id'] = undefined;

/**
 * @member {module:model/TypeTlsDomain} type
 */
TlsDomainData.prototype['type'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsDomain} relationships
 */
TlsDomainData.prototype['relationships'] = undefined;






export default TlsDomainData;

