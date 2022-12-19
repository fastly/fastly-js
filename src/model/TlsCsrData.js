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
import TlsCsrDataAttributes from './TlsCsrDataAttributes';
import TypeTlsCsr from './TypeTlsCsr';

/**
 * The TlsCsrData model module.
 * @module model/TlsCsrData
 * @version 3.0.1-alpha.1
 */
class TlsCsrData {
    /**
     * Constructs a new <code>TlsCsrData</code>.
     * @alias module:model/TlsCsrData
     */
    constructor() { 
        
        TlsCsrData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCsrData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCsrData} obj Optional instance to populate.
     * @return {module:model/TlsCsrData} The populated <code>TlsCsrData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCsrData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsCsr.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsCsrDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsCsr.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsCsr} type
 */
TlsCsrData.prototype['type'] = undefined;

/**
 * @member {module:model/TlsCsrDataAttributes} attributes
 */
TlsCsrData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsCsr} relationships
 */
TlsCsrData.prototype['relationships'] = undefined;






export default TlsCsrData;

