"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsDomain = _interopRequireDefault(require("./RelationshipsForTlsDomain"));

var _TypeTlsDomain = _interopRequireDefault(require("./TypeTlsDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsDomainData model module.
 * @module model/TlsDomainData
 * @version 3.0.0-alpha1
 */
var TlsDomainData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsDomainData</code>.
   * @alias module:model/TlsDomainData
   */
  function TlsDomainData() {
    _classCallCheck(this, TlsDomainData);

    TlsDomainData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsDomainData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsDomainData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsDomainData} obj Optional instance to populate.
     * @return {module:model/TlsDomainData} The populated <code>TlsDomainData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsDomainData();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsDomain["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsDomain["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return TlsDomainData;
}();
/**
 * The domain name.
 * @member {String} id
 */


TlsDomainData.prototype['id'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsDomain} relationships
 */

TlsDomainData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeTlsDomain} type
 */

TlsDomainData.prototype['type'] = undefined;
var _default = TlsDomainData;
exports["default"] = _default;