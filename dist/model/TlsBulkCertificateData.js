"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsBulkCertificate = _interopRequireDefault(require("./RelationshipsForTlsBulkCertificate"));

var _TlsBulkCertificateDataAttributes = _interopRequireDefault(require("./TlsBulkCertificateDataAttributes"));

var _TypeTlsBulkCertificate = _interopRequireDefault(require("./TypeTlsBulkCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsBulkCertificateData model module.
 * @module model/TlsBulkCertificateData
 * @version 3.0.0-alpha1
 */
var TlsBulkCertificateData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsBulkCertificateData</code>.
   * @alias module:model/TlsBulkCertificateData
   */
  function TlsBulkCertificateData() {
    _classCallCheck(this, TlsBulkCertificateData);

    TlsBulkCertificateData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsBulkCertificateData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsBulkCertificateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateData} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateData} The populated <code>TlsBulkCertificateData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsBulkCertificateData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _TlsBulkCertificateDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsBulkCertificate["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsBulkCertificate["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return TlsBulkCertificateData;
}();
/**
 * @member {module:model/TlsBulkCertificateDataAttributes} attributes
 */


TlsBulkCertificateData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsBulkCertificate} relationships
 */

TlsBulkCertificateData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeTlsBulkCertificate} type
 */

TlsBulkCertificateData.prototype['type'] = undefined;
var _default = TlsBulkCertificateData;
exports["default"] = _default;