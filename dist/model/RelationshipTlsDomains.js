"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipCommonNameCommonName = _interopRequireDefault(require("./RelationshipCommonNameCommonName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsDomains model module.
 * @module model/RelationshipTlsDomains
 * @version 3.0.0-alpha1
 */
var RelationshipTlsDomains = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsDomains</code>.
   * @alias module:model/RelationshipTlsDomains
   */
  function RelationshipTlsDomains() {
    _classCallCheck(this, RelationshipTlsDomains);

    RelationshipTlsDomains.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsDomains, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsDomains</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsDomains} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsDomains} The populated <code>RelationshipTlsDomains</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsDomains();

        if (data.hasOwnProperty('tls_domains')) {
          obj['tls_domains'] = _RelationshipCommonNameCommonName["default"].constructFromObject(data['tls_domains']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsDomains;
}();
/**
 * @member {module:model/RelationshipCommonNameCommonName} tls_domains
 */


RelationshipTlsDomains.prototype['tls_domains'] = undefined;
var _default = RelationshipTlsDomains;
exports["default"] = _default;